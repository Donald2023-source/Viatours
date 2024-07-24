const Footer = () => {
    return (
        <>
        <div>
            <footer className="flex gap-10 flex-wrap items-center justify-around text-white p-10 bg-mainColor">
                <div>
                    <h2 className="font-bold text-lg">Contact</h2>
                        <ul className="flex flex-col gap-3 py-3">
                            <li>328 Queensberry Street, North Melbourne VIC3051, Australia.</li>
                            <li>hi@viatours.com</li>
                        </ul>
                </div>

                <div>
                    <h2 className="font-bold text-lg">Company</h2>
                    <ul className="flex flex-col gap-3 py-3">
                        <li>About Us</li>
                        <li>Tourz Review</li>
                        <li>Contact Us</li>
                        <li>Travel Guides</li>
                        <li>Data Policy</li>
                        <li>Cookie Policy</li>
                        <li>Legal</li>
                        <li>Site Map</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-lg">Support</h2>
                    <ul className="flex flex-col gap-3 py-3">
                        <li>Get in Touch</li>
                        <li>Help Center</li>
                        <li>Live Chat</li>
                        <li>How it works</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-lg">NewsLetter</h2>

                    <ul className="flex flex-col gap-3 py-3">
                        <li>
                            <fieldset className="flex bg-white text-black p-3 rounded-lg">
                            <input type="text" placeholder="Your Email Address" />
                            <p>Send</p>
                            </fieldset>
                        </li>
                        <li>Mobile Apps</li>
                        <li>Android, IOS</li>
                    </ul>
                </div>

            </footer>
        </div>
        </>
    )
}
export default Footer