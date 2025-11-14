export default function Home() {
    return (
        <section id="home">
            <h2>It's the little things that matter!</h2>

            <p className="tagline">Welcome to my little collection of accessible things!</p>

            <p>Here you'll find accessible code snippets, be able to physically see the code in action, and learn
                from documentation that is easier on the eyes.s</p>

            <p>I hope these small, or shall I say <i>little</i>, pieces of knowledge are easier
                for developers to digest. I'll be adding more pages over time.</p>

            <p>(I also wanted an excuse to use React, so here you go! Enjoy!)</p>

            <section id="definitions">
                <h3>Glossary:</h3>
                <b>Semantics:</b>
                <p> Why are semantics important? It's how search engines and assistive technologies
                    understand the structure of a site and it's content. It also shows that you, as
                    a developer, have a foundational understanding of how HTML works.
                </p>
                <p>Using semantic elements is like building a house. There's a reason why you have different nails, and screws.
                    Sure, they can look similar. Sure, you can use nails for everything. But nails aren't intended for
                    certain things. Using nails in a way they're not intended then weakens the overall structure of
                    your house. Might even make your house fall apart.</p>
                <p className="tagline">"If you want your house aka your site to last, write code semantically."</p>
            </section>
        </section>
    );
}
