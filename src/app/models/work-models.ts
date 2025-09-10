export interface WorkListItemModel {
  id: string,
  title: string,
  companyName?: string
  image: string
}

export interface WorkModel {
  id: string,
  title: string,
  companyName?: string
  image: string[]
  date: string
  link?: string
  description: string
  technologies: Array<string>
}

export enum WorkType {
  JOB = 'job',
  PROJECT = 'project'
} 
