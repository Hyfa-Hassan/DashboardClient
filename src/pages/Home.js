import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <main>
      <div className="content">
          Dummy data is mock data generated at random as a substitute for live
          data in testing environments. In other words, dummy data acts as a
          placeholder for live data, the latter of which testers only introduce
          once it’s determined that the trail program does not have any
          unintended, negative impact on the underlying data. For example, a
          company implementing a new accounting system uses dummy data to ensure
          its bookings are stored correctly before inputting live accounts. You
          can think of dummy data like a car crash dummy — you hope nothing bad
          happens to it while testing, but if something bad does happen, you can
          fix the problem with no negative impact on your valuable data assets.
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home