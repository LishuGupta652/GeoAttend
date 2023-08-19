import Image from 'next/image'
import Child from './components/Child'

export default function Home() {

  return (
    <main className="flex  flex-col items-center p-24">
      <Image
        src="/images/logo.svg"
        alt="GeoAttend Logo"
        width={200}
        height={200}
      />
      <Child />

      <div className="relative flex  before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] ">
        <h1>
          Introducing **GeoAttend**, a cutting-edge Geospatial Attendance System designed to streamline attendance tracking for organizations and events of all sizes. With a robust set of features and a user-friendly interface, GeoAttend ensures accurate and efficient attendance management through advanced geofencing technology.
        </h1>
      </div>


    </main>
  )
}
