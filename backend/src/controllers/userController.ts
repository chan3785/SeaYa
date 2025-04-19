import { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";


export const events = async(req:Request,res:Response) =>{
    try {
           
        const events = await prisma.event.create({
            data:{
                 name:req.body.name,
                 description:req.body.description,
                 startDate:req.body.startDate,
                 endDate:req.body.endDate,
                 mode:req.body.mode,
                 type:req.body.type,
                 status:req.body.status,
                 creator:{
                     connect:{
                         id:req.body.creatorId
                     }
                 }

            }


        })
       if(events){
           res.status(201).json(events)
           
       }
    const getEvents = await prisma.event.findMany({
        where:{
            creatorId:req.user.id,
            name:req.body.name,
            description:req.body.description,
            startDate:req.body.startDate,
            endDate:req.body.endDate,
            mode:req.body.mode,
        }
    })
    res.status(200).json(getEvents)
   
        
    } catch (error:any) {
        
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

export const projects = async(req:Request,res:Response) =>{
    try {
           
        const projects = await prisma.project.create({
            data:{
                 name:req.body.name,
                 description:req.body.description,
                 eventId:req.body.eventId,
                 userId:req.body.userId,
                 votes:{
                     createMany:{
                         data:req.body.votes
                     }
                 }

            }


        })
       if(projects){
           res.status(201).json(projects)
           
       }
    const getProjects = await prisma.project.findMany({
        where:{
            userId:req.user.id,
            name:req.body.name,
            description:req.body.description,
            eventId:req.body.eventId,
        }
    })
    res.status(200).json(getProjects)
   
        
  
    } catch (error:any) {
        
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }

}
export const votes = async(req:Request,res:Response) =>{
    try {
           
        const votes = await prisma.vote.create({
            data:{
                 projectId:req.body.projectId,
                 voterId:req.body.voterId,
                 score:req.body.score,
                 type:req.body.type,

            }


        })
       if(votes){
           res.status(201).json(votes)
           
       }
    const getVotes = await prisma.vote.findMany({
        where:{
            projectId:req.body.projectId,
            voterId:req.body.voterId,
            score:req.body.score,
            type:req.body.type,
        }
    })
    res.status(200).json(getVotes)
   
        
    } catch (error:any) {
        
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}
export const  NFT = async(req:Request,res:Response) =>{
    try {
           
        const NFT = await prisma.nFT.create({
            data:{
                 userId:req.body.userId,
                 metadata:req.body.metadata,
                 ranking:req.body.ranking,
                 lastUpdated:req.body.lastUpdated,

            }


        })
       if(NFT){
           res.status(201).json(NFT)
           
       }
    const getNFT = await prisma.nFT.findMany({
        where:{
            userId:req.user.id,
            metadata:req.body.metadata,
            ranking:req.body.ranking,
            lastUpdated:req.body.lastUpdated,
        }
    })
    res.status(200).json(getNFT)
   
        const searchNFT = await prisma.nFT.findUnique({
        where:{
           

        }
    })
    res.status(200).json(searchNFT)

   
        const { metadata, ranking } = req.body;
        const nft = await prisma.nFT.update({
          where: { userId: req.params.userId },
          data: { metadata, ranking }
        });
        res.json(nft);
    } catch (error:any) {
        
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}