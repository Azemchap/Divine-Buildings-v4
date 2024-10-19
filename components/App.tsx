import Footer from "./Footer";
import NavBar from "./NavBar";


export default function App({ children }) {
    return (
        <>
            <NavBar />
            <main className="pt-8">{children}</main>
            <Footer />
        </>
    )
}
