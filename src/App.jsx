import './App.css'
import {useState} from "react";
import {getTodayDate} from "./utils/dataUtils.js";
import {useApod} from "./hooks/useApod.js";
import DatePicker from "./components/DatePicker.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Loading from "./components/Loading.jsx";
import ApodCard from "./components/ApodCard.jsx";

function App() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const { data, loading, error, refetch } = useApod(selectedDate);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  }

  return (
      <div>
        <header>
          <h1>NASA APOD Gallery</h1>
          <p>Astronomic Picture of the Day</p>
        </header>

        <DatePicker
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />

        <main>
          {loading && <Loading />}
          {error && <ErrorMessage message={error} onRetry={refetch(selectedDate)} />}
          {!loading && !error && data && <ApodCard data={data} />}
        </main>
      </div>
  )
}

export default App
