import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const statusEnum = await prisma.$transaction(
    ["printed", "picked"].map((val) =>
      prisma.statusEnum.upsert({
        where: { value: val },
        update: {},
        create: { value: val },
      })
    )
  );

  const settings = await prisma.$transaction(
    [
      {
        refTitle: "time_low_threshold",
        title: "Time Low Threshold",
        description:
          "This is the time threshold to categorize label status. The time value below this threshold will be indicated as low. The time value used is in seconds",
        value: "3600",
      },
      {
        refTitle: "panel_low_threshold",
        title: "Panel Low Threshold",
        description:
          "This is the panel threshold to categorize label status. The panel value below this threshold will be indicated as low. The panel value is in unit",
        value: "30",
      },
      {
        refTitle: "panel_exhaust_threshold",
        title: "Panel Low Threshold",
        description:
          "This is the panel threshold to categorize label status. The panel value reaches this threshold will be indicated as exhaust. The panel value is in unit",
        value: "0",
      },
      {
        refTitle: "font_size",
        title: "Font Size",
        description: "This is the font size of overall user interface text",
        value: "12",
      },
    ].map((val) =>
      prisma.setting.upsert({
        where: { refTitle: val.refTitle },
        update: {},
        create: { ...val },
      })
    )
  );

  console.log({ statusEnum, settings });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
