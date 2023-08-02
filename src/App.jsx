import { QueryClientProvider, QueryClient } from 'react-query'
import './App.css'
import FilterNav from './components/Filters/FilterNav'
import HeaderBinance from './components/Header/HeaderBinance'
import NavCripto from './components/Nav/NavCripto'
import OfferTable from './components/Offers/OfferTable'
import Ad from './components/SectionAd/Ad'

const  queryClient = new QueryClient(); 

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderBinance/>
      <Ad/>
      <NavCripto/>
      <main>
        <FilterNav/>
        <OfferTable/>
      </main>
    </QueryClientProvider>
  )
}

export default App
