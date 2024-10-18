import Footer from './Footer'
import NavBar from './NavBar'

export default function App({ children }) {
    return (
        <>
            <NavBar />
            <main className=" mt-16 mb-40">{children}</main>
            <Footer />
        </>
    )
}
