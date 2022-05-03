import Image, { StaticImageData } from "next/image";

interface PastProjectsComponent {
  imgsrc: StaticImageData;
  alt: string;
  title: string;
  description: string;
  repo: string;
  liveDemo: string;
}

export default function PastProjects(props: PastProjectsComponent) {
  const { imgsrc, alt, title, description, repo, liveDemo } = props;

  return (
    <section className="w-full bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-pink-900">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center px-4 xl:w-1/2">
          <Image
            layout="intrinsic"
            className="h-40 w-40 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-lg"
            src={imgsrc}
            alt={alt}
          />
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            {title}
          </h2>

          <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
            {description}
          </p>

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
              <a
                href={repo}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"
                    fill="white"
                  ></path>
                </svg>

                <span className="mx-2">Check out this project at Github</span>
              </a>
            </div>

            <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
              <a
                href={liveDemo}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM10 7.50002V16.5L16 12L10 7.50002Z"
                    fill="white"
                  ></path>
                </svg>

                <span className="mx-2">Check it out live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
