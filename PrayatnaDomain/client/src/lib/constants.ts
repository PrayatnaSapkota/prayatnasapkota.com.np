import { Mission } from "@/components/ui/mission-card";

export const missions: Mission[] = [
  {
    title: "Mission Alpha",
    subtitle: "AI-based Space Object Classification",
    description: "Train a basic AI model to classify planets, stars, or galaxies from astronomical images.",
    status: "In Progress",
    icon: "satellite",
    techStack: [
      { name: "Python" },
      { name: "TensorFlow/Keras" },
      { name: "Image Processing" }
    ]
  },
  {
    title: "Mission Beta",
    subtitle: "Coming Soon",
    description: "Details of this exciting mission will be revealed in the future. Stay tuned!",
    status: "Planned",
    icon: "rocket",
    techStack: [
      { name: "TBD" }
    ]
  },
  {
    title: "Mission Gamma",
    subtitle: "Coming Soon",
    description: "An ambitious future project that will push the boundaries of my skills and knowledge.",
    status: "Planned",
    icon: "planet",
    techStack: [
      { name: "TBD" }
    ]
  }
];
