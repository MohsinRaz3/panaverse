import WMDImg from '../../assets/images/metaverse.png'
import ai from '../../assets/images/ai.jpg'
import cnc from '../../assets/images/cnc.png'
import iot from '../../assets/images/iot.jpeg'





interface Quarter {
    header: string;
    description: string;
    number: string;
}

interface dataCourseType {
    slug: string;
    header: string;
    description: string;
    image: any
    quarters: Quarter[];
}



export const dataCourse: dataCourseType[] = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain)& Metaverse Specialization",
        image: WMDImg,
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        quarters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: "4"
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: "5",

            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence(AI) & Deep Learning Specialization",
        image: ai,
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: "4"
            },
            {
                header: "Quarter V",
                description: " AI-361: Deep Learning and MLOps",
                number: "5",

            }
        ]
    },
    {
        slug: "cnc",
        header: "Cloud-Native Computing Specialization",
        image: cnc,
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        quarters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: "4"
            },
            {
                header: "Quarter V",
                description: " CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
                number: "5",

            }
        ]
    },
    {
        slug: "aci",
        header: "Ambient Computing & IoT Specialization",
        image: iot,
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.",
        quarters: [
            {
                header: "Quarter IV",
                description: " AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: "4"
            },
            {
                header: "Quarter V",
                description: " AC-361: Embedded Programming using C and Rust",
                number: "5",

            }
        ]
    },

]