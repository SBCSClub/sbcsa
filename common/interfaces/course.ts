export interface Course{
    name: string,
    grade: number,
    weighting: string,
    credits: number, 
    image_path?: string,
    description: string,
    link?: string,
    tags?: string[],
    prereqs: PreReq[]
}

export interface PreReq{
    class: string,
    grade: string
}