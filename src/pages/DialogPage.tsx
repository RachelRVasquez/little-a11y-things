import Tabs from "../components/Tabs/Tabs";
import DialogVisualMode from "../components/DialogExample/DialogVisualMode";
import DialogCodeMode from "../components/DialogExample/DialogCodeMode";
import DialogInfo from "../components/DialogExample/DialogInfo";

export default function DialogPage() {
    return(
        <section id="dialog-page">
            <h1>Little A11y Dialog</h1>
            <Tabs
                tabs={[
                    { label: "Visual Mode", content: <DialogVisualMode /> },
                    { label: "Code Mode", content: <DialogCodeMode /> },
                ]}
            />
            <div className="component-desc">
                <DialogInfo />
            </div>
        </section>
    );
}