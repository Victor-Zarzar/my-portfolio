import type {
  Experience,
  GetTimelineDataParams,
} from "@/app/shared/types/get-data/get-data";

export function getTimelineData({ t }: GetTimelineDataParams): Experience[] {
  return [
    {
      id: 0,
      type: "work",
      time: t("freelance-1.time"),
      title: t("freelance-1.title"),
      role: t("freelance-1.role"),
      achievements: t("freelance-1.achievements"),
      description: t("freelance-1.description"),
      local: t("freelance-1.local"),
      tags: [
        "Flutter",
        "Dart",
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Nginx",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      id: 1,
      type: "work",
      time: t("xlabs.time"),
      title: t("xlabs.title"),
      role: t("xlabs.role"),
      achievements: t("xlabs.achievements"),
      description: t("xlabs.description"),
      local: t("xlabs.local"),
      tags: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Nginx",
        "Docker",
        "MySQL",
      ],
    },
    {
      id: 2,
      type: "work",
      time: t("freelance.time"),
      title: t("freelance.title"),
      role: t("freelance.role"),
      achievements: t("freelance.achievements"),
      description: t("freelance.description"),
      local: t("freelance.local"),
      tags: ["Tester", "Web", "iOS", "Android"],
    },
    {
      id: 3,
      type: "education",
      time: t("ahanguera1.time"),
      title: t("ahanguera1.title"),
      description: t("ahanguera1.description"),
    },
    {
      id: 4,
      type: "education",
      time: t("ahanguera2.time"),
      title: t("ahanguera2.title"),
      description: t("ahanguera2.description"),
    },
  ];
}
