import TipsAndTricks from "./TipsAndTricks"
import PopularEssayExamples from "./PopularEssayExamples"
import LiveHelp from "./LiveHelp"

function EssayHelp() {
    return (
        <div className="flex w-screen">
            <TipsAndTricks />
            <PopularEssayExamples />
            <LiveHelp />
        </div>
    )
}

export default EssayHelp