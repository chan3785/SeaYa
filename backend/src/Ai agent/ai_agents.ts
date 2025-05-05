import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json());

// TypeScript interface extension
declare global {
    namespace Express {
        interface Request {
            event?: {
               
                status: "IN_PROGRESS" | "UPCOMING"
            };
            winner?: {
                name: string,
                eventId: string
            };
            
        
        }
    }
}

// Generate AI-powered event promotion text
const generateEventPromotion = async (eventName: string, description: string) => {
    const prompt = `Create an engaging promotional message for the event: ${eventName}. Description: ${description}.`;
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0]?.message?.content || "Event promotion unavailable.";
};

// Generate winner announcement text
const generateWinnerAnnouncement = async (winnerName: string, eventName: string) => {
    const prompt = `Create a celebratory announcement for ${winnerName}, the winner of ${eventName}.`;
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
    });
    return response.choices[0]?.message?.content || "Winner announcement unavailable.";
};

// Middleware to check if event status is provided
const checkEventStatus = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const status = req.query.status as "IN_PROGRESS" | "UPCOMING" | undefined;
    if (!status || (status !== "IN_PROGRESS" && status !== "UPCOMING")) {
        return res.status(400).json({ error: 'Valid event status required (IN_PROGRESS or UPCOMING)' });
    }
    req.event = { status };
    next();
};

// API to get AI-generated event promotions
app.get('/promote-events', checkEventStatus, async (req, res) => {
    try {
        const events = await prisma.event.findMany({
            where: { status: req.event?.status }
        });
        
        const promotions = await Promise.all(
            events.map(async (event) => ({
                event,
                promotion: await generateEventPromotion(event.name, event.description),
            }))
        );
        res.json(promotions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating event promotions' });
    }
});

// API to get AI-generated winner announcements
app.get('/announce-winners', async (req, res) => {
    try {
        const winners = await prisma.winner.findMany({
            include: { winnerEvents: true } // Changed from events to event assuming a winner belongs to one event
        });
        
        const announcements = await Promise.all(
            winners.map(async (winner) => ({
                winner,
                announcement: await generateWinnerAnnouncement(winner.id, winner.winnerEvents.event.name),
            }))
        );
        res.json(announcements);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating winner announcements' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`AI event promotion service running on port ${PORT}`);
});
