function HeroSection() {
    return (
        <section className="bg-white px-4 py-10 md:py-16 lg:px-24">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Have you or a loved one been affected by <span className="text-red-600">Mesothelioma?</span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
                    As a woman, you've carried the weight of care, love, and resilience. Now it’s time someone stands with you.
                </p>

                <ul className="text-left list-disc list-inside text-gray-700 max-w-xl mx-auto text-base md:text-lg space-y-1">
                    <li>Secondary Asbestos exposure is common</li>
                    <li>Misdiagnosis delays are more frequent in women</li>
                    <li>Women have won significant legal settlements</li>
                </ul>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium text-sm">ONLY 6 SLOTS LEFT</span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium text-sm">Free Case Review</span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm">100% Confidential</span>
                    <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm">No Win, No Fee</span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium text-sm">Free Case Evaluation</span>
                    <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium text-sm">We are here to help!</span>
                    <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-medium text-sm">Contact us</span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
