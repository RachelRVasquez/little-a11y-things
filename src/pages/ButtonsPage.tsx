import Tabs from "../components/Tabs/Tabs";
import ButtonsVisualMode from "../components/ButtonsExample/ButtonsVisualMode";
import ButtonsCodeMode from "../components/ButtonsExample/ButtonsCodeMode";
import ButtonsInfo from "../components/ButtonsExample/ButtonsInfo";

export default function ButtonsPage() {
    return(
        <section id="dialog-page">
            <h2>Buttons</h2>
            <Tabs
                tabs={[
                    { label: "Visual Mode", content: <ButtonsVisualMode /> },
                    { label: "Code Mode", content: <ButtonsCodeMode /> },
                ]}
            />
            <div className="component-desc">
                <ButtonsInfo />
            </div>
        </section>
    );
}