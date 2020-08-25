/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
    render() {
        return (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={this.props.href} target={this.props.target}>
                    {this.props.children}
                </a>
            </div>
        );
    }
}

Button.defaultProps = {
    target: '_self',
};

class Showcase extends React.Component {
    render() {
        let language = this.props.language || 'en';
        let title = 'Showcase';

        return (
            <div>
				<div class='centeredheadline'>
					<h1>{title}</h1>
					<span>Some creations of our magnificent users.</span>
				</div>
                <div className="mainContainer">

                    <Container padding={["bottom", "top"]}>
                        <GridBlock
                            align="center"
                            className="showcase"
                            contents={[
                                {
                                    content:
                                        `<strong>
                                            <a href="https://www.tvtower.org">Website</a>
                                         </strong>
                                        <br/><br/>
                                        Free and open-source simulation game around managing a TV Station.<br />
                                        Running on Linux, Mac and Windows.
                                        `,
                                    image: `${siteConfig.baseUrl}img/showcase/tvtower.jpg`,
                                    imageAlign: "top",
                                    imageLink: `https://www.tvtower.org`,
                                    title: "TVTower"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://gwron.itch.io/genus-prime">Website</a>
                                         </strong>
                                        <br/><br/>
                                        Free and open-source sci-fi realtime strategy game. Conquer all galaxies - in the colour palette of the good old C64!<br />
                                        Running on Linux, Mac and Windows.
                                        `,
                                    image: `${siteConfig.baseUrl}img/showcase/genusprime.png`,
                                    imageAlign: "top",
                                    imageLink: `https://gwron.itch.io/genus-prime`,
                                    title: "Genus Prime"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://www.gamehouse.com/games/daydream-mosaics">Website</a>
                                         </strong>
                                        <br/><br/>
                                        Commercial casual game around solving numeric puzzles while painting images.<br />
                                        Available for Windows and Mac OS.
                                        `,
                                    image: `${siteConfig.baseUrl}img/showcase/daydreammosaic.jpg`,
                                    imageAlign: "top",
                                    imageLink: `https://www.gamehouse.com/games/daydream-mosaics`,
                                    title: "Daydream Mosaics"
                                },
                            ]}
                            layout="threeColumn"
                        />
                        <br /><br />
                        <GridBlock
                            align="center"
                            className="showcase"
                            contents={[
                                {
                                    content:
                                        `<strong>
                                            <a href="https://www.syntaxbomb.com/index.php/topic,3585.0.html">Website</a>
                                         </strong>
                                        <br/><br/>
                                        Free casual game about time management and sweet-hungry children on Halloween.<br />
                                        Running on Linux and Windows.
                                        `,
                                    image: `${siteConfig.baseUrl}img/showcase/trickorsweets.jpg`,
                                    imageAlign: "top",
                                    imageLink: `https://www.syntaxbomb.com/index.php/topic,3585.0.html`,
                                    title: "Trck Or Sweets"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://www.tvtower.org">Website</a>
                                         </strong>
                                        <br/><br/>
                                        Database-Editor for the free and open-source game TVTower. Utilizes wx.mod to create a highly cross platform GUI application!<br />
                                        Running on Linux and Windows.
                                        `,
                                    image: `${siteConfig.baseUrl}img/showcase/tvtower_editor.jpg`,
                                    imageAlign: "top",
                                    imageLink: `https://www.tvtower.org`,
                                    title: "TVTower DB-Editor"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://blitzmax.org">Website</a>
                                         </strong>
                                        <br/><br/>
                                        The free and open-source basic code editor shipped with BlitzMax NG releases. Utilizes maxgui.mod to create a cross platform GUI experience.<br />
                                        Running on Linux, Mac OS and Windows.
                                        `,
                                    image: `${siteConfig.baseUrl}img/showcase/maxide.jpg`,
                                    imageAlign: "top",
                                    imageLink: `https://blitzmax.org`,
                                    title: "MaxIDE [NG]"
                                },
                            ]}
                            layout="threeColumn"
                        />
                    </Container>
                </div>
            </div>
        );
    }
}


//siteConfig.disableTitleTagline = true;
Showcase.title = 'Showcase';

module.exports = Showcase;