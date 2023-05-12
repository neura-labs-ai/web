import { SITE, TEAM_MEMBERS } from "@/lib/helpers/constants";
import Image from "next/image";

const people = TEAM_MEMBERS;

export default function RootTeam() {
  return (
    <>
      <div className="bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              At {SITE.NAME}, we're a team of passionate developers
              and AI enthusiasts who believe in the power of technology to
              transform the world. We're committed to providing developers with
              the tools they need to build amazing applications using the latest
              AI and machine learning techniques. We believe that by making AI
              more accessible and easy to use, we can help unlock its full
              potential and make a positive impact on society. Our team values
              creativity, innovation, and collaboration. We encourage open
              communication and strive to create a positive and inclusive work
              environment where everyone's ideas are valued. We believe in
              constantly learning and improving our skills, and we're always
              looking for new ways to push the boundaries of what's possible
              with AI. Whether you're a developer just starting out or a
              seasoned pro, we're here to support you on your AI journey. We're
              excited to be part of this rapidly evolving field, and we look
              forward to working with you to create the next generation of
              intelligent applications.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <Image
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                    width={150}
                    height={150}
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-zinc-300">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-pink-400">
                      {person.role}
                    </p>
                    <a
                      className="text-zinc-400"
                      href={person.github}
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
