
interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
}

function TimelineEvent({ year, title, description }: TimelineEventProps) {
  return (
    <div className="relative pl-10 pb-8 border-l-2 border-sbc-blue last:border-l-0 last:pb-0">
      <div className="absolute -left-1 top-0 h-6 w-6 rounded-full border-4 border-sbc-blue bg-white" />
      <div className="mb-1 text-sm text-sbc-blue font-semibold">{year}</div>
      <h4 className="text-lg font-bold text-sbc-gray-dark mb-2">{title}</h4>
      <p className="text-sbc-gray">{description}</p>
    </div>
  );
}

export function Timeline() {
  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "SBC was established with a focus on small-scale residential projects and basic civil engineering services."
    },
    {
      year: "2013",
      title: "First Major Commercial Project",
      description: "Completed our first major commercial building, establishing SBC as a reliable construction partner."
    },
    {
      year: "2015",
      title: "Expansion of Services",
      description: "Added structural design and comprehensive project management to our service offerings."
    },
    {
      year: "2018",
      title: "Industry Recognition",
      description: "Received industry award for excellence in civil engineering and sustainable construction practices."
    },
    {
      year: "2020",
      title: "International Projects",
      description: "Expanded operations to include international projects, working across borders with global partners."
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Implemented cutting-edge BIM and project management technologies to enhance efficiency and client experience."
    }
  ];
  
  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
      <div className="relative">
        {milestones.map((milestone, index) => (
          <TimelineEvent
            key={index}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
          />
        ))}
      </div>
    </div>
  );
}
