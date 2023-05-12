import { SITE } from "@/lib/helpers/constants";
import { Bot, Languages, Shield } from "lucide-react";
import Image from "next/image";

// The imagine that is show throughout this component no matter the scroll point.
const STICKY_IMAGE =
  "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png";

export default function RootContent() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-zinc-950 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 bg-zinc-950 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-zinc-950">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-teal-500 pb-2">
                  AI Powered
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-300 sm:text-4xl">
                  Elevate Your Apps
                </h1>
                <p className="mt-6 text-xl leading-8 text-zinc-400">
                  AI-powered apps can enhance the functionality of applications,
                  allowing developers to create more intelligent and
                  sophisticated software. By leveraging our AI-powered Rest API,
                  developers can save time and resources on developing complex
                  AI algorithms and focus on creating amazing user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-zinc-950 shadow-xl ring-1 ring-pink-400 sm:w-[57rem]"
              src={STICKY_IMAGE}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-zinc-400 lg:max-w-lg">
                <p>
                  With our service, developers can quickly and easily access
                  advanced AI functionality, empowering them to create more
                  intelligent, efficient, and sophisticated applications.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <Languages
                      className="mt-1 h-5 w-5 flex-none text-teal-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-zinc-300">
                        Translate text.
                      </strong>{" "}
                      <p className="text-zinc-400">
                        The process of converting text from one language to
                        another using AI-powered machine translation technology.
                        With the help of machine learning algorithms, developers
                        can build powerful translation applications that
                        accurately and efficiently translate text between
                        multiple languages.
                      </p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Bot
                      className="mt-1 h-5 w-5 flex-none text-teal-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-zinc-300">
                        Chat Bots
                      </strong>{" "}
                      <p className="text-zinc-400">
                        Chat-bots are AI-powered applications that can simulate
                        human conversations through messaging, voice, or other
                        communication channels. They can be used for a variety
                        of purposes, such as customer service, sales, or even
                        entertainment. Developers can leverage chatbot APIs to
                        build custom chat-bots that interact with users and
                        provide helpful responses.
                      </p>
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <Shield
                      className="mt-1 h-5 w-5 flex-none text-teal-500"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-zinc-300">
                        Text Moderation
                      </strong>{" "}
                      <p className="text-zinc-400">
                        The use of AI algorithms to automatically detect and
                        moderate inappropriate or harmful content in text-based
                        communication channels such as social media, messaging
                        apps, or online forums. With the help of natural
                        language processing and machine learning, developers can
                        build text moderation applications that can flag,
                        filter, and remove unwanted content in real-time,
                        improving the safety and security of online communities.
                      </p>
                    </span>
                  </li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-300">
                  The importance of AI
                </h2>
                <p className="mt-6">
                  Artificial Intelligence (AI) has become increasingly important
                  today due to its ability to automate tasks, analyze data, and
                  make informed decisions. With the rapid growth of digital
                  data, businesses and organizations are leveraging AI to
                  extract valuable insights and optimize their operations. AI is
                  also being used in a variety of industries, from healthcare to
                  finance, to improve outcomes and provide better experiences
                  for customers. Additionally, AI has the potential to solve
                  complex societal challenges, such as climate change, by
                  enabling more efficient and sustainable solutions. Overall, AI
                  is poised to transform the way we live and work, making it an
                  important technology for today and the future.
                </p>
                <p className="mt-6">
                  At {SITE.NAME}, we believe that AI is a critical technology
                  for today's world, and we're dedicated to providing developers
                  with the tools they need to harness its power. By leveraging
                  our AI-powered Rest API, developers can easily integrate
                  powerful AI capabilities into their applications, such as
                  chat-bots and language translation, enabling them to create
                  more intelligent, efficient, and sophisticated software. We
                  believe that by making AI more accessible and easy to use, we
                  can help developers to unlock its full potential and make a
                  positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
