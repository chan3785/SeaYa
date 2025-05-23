import { create } from 'zustand'

interface EventPackageId {
  eventIdValue: string
  setEventIdValue: (value: string) => void
}

interface ProjectPackageId {
  projectIdValue: string
  setProjectIdValue: (value: string) => void
}

const useEventId = create<EventPackageId>((set) => ({
    eventIdValue: "",
    setEventIdValue: (value) => set({ eventIdValue: value }),
}))

export default useEventId;

export const useProjectId = create<ProjectPackageId>((set) => ({
    projectIdValue: "",
    setProjectIdValue: (value) => set({ projectIdValue: value }),
}))