import { PrismaClient } from "@repo/db/client";
const prisma = new PrismaClient(); 

export default function Home() {
  return (
    <div>
      <div className="text-4xl font-bold">
        title
      </div>
    </div>
  );
}
