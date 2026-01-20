import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import {useState} from "react";
import {getTodayDate} from "./utils/dataUtils.js";
import {useApod} from "./hooks/useApod.js";
import DatePicker from "./components/DatePicker.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import Loading from "./components/Loading.jsx";
import ApodCard from "./components/ApodCard.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./layout/Layout.jsx";

function App() {
  // const [selectedDate, setSelectedDate] = useState(getTodayDate());
  // const { data, loading, error, refetch } = useApod(selectedDate);
  //
  // const handleDateChange = (newDate) => {
  //   setSelectedDate(newDate);
  // }

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  {/* landing */}
                  <Route path="/" element={<HomePage />} />

                  {/* pages */}
                  <Route path="/apod" element={""} />
                  <Route path="/mars" element={""} />
                  <Route path="/neo" element={""} />
                  <Route path="/earth" element={""} />

                  {/* 404 */}
                  <Route path="*" element={""} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
