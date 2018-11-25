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

class HomeSplash extends React.Component {
    render() {
        return (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">
                        <div className="projectLogo">
                        </div>
                        <div className="inner">
                            <h2 className="projectTitle">
                                <img src={siteConfig.baseUrl + 'img/blitzmax.svg'}/>
                                <small>{siteConfig.tagline}</small>
                            </h2>
                            <div className="section promoSection">
                                <div className="promoRow">
                                    <div className="pluginRowBlock">
                                        <Button
                                            href={
                                                siteConfig.baseUrl +
                                                'docs/' +
                                                this.props.language +
                                                '/setup/get_started'
                                            }>
                                            Get Started
                                        </Button>
                                        <Button
                                            href={
                                                siteConfig.baseUrl +
                                                'downloads'
                                            }>
                                            Downloads
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="productShowcaseSection paddingBottom"
                                style={{textAlign: 'center'}}>
                                <p>
                                    BlitzMax is a fast cross-platform, open-source, programming language.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Index extends React.Component {
    render() {
        let language = this.props.language || 'en';
        const showcase = siteConfig.users
            .filter(user => {
                return user.pinned;
            })
            .map(user => {
                return (
                    <a href={user.infoLink}>
                        <img src={user.image} title={user.caption} />
                    </a>
                );
            });

        return (
            <div>
                <HomeSplash language={language} />
                <div className="mainContainer">

                    <Container padding={["bottom", "top"]}>
                        <GridBlock
                            align="center"
                            contents={[
                                {
                                    content:
                                        `Build, deploy and run your apps on many popular platforms.
                                        <br/><br/>
                                        <img src=${siteConfig.baseUrl}img/platform/windows.svg title="Windows" width="50px" height="50px"/>
                                        <img src=${siteConfig.baseUrl}img/platform/linux.svg title="Linux" width="50px" height="50px"/>
                                        <img src=${siteConfig.baseUrl}img/platform/apple.svg title="macOS and iOS" width="50px" height="50px"/>
                                        <img src=${siteConfig.baseUrl}img/platform/android.svg title="Android" width="50px" height="50px"/>
                                        <img src=${siteConfig.baseUrl}img/platform/rpi.svg title="Raspberry Pi" width="50px" height="50px"/>
                                        <img src=${siteConfig.baseUrl}img/platform/switch.svg title="Switch Homebrew" width="50px" height="50px"/>
`,
                                    image: `${siteConfig.baseUrl}img/devices.svg`,
                                    imageAlign: "top",
                                    imageLink: `${siteConfig.baseUrl}docs/setup/${this.props.language}/get_started/`,
                                    title: "Cross-platform"
                                },
                                {
                                    content:
                                        `The BlitzMax community have developed scores of great cross-platform drop-in modules, from game-coding frameworks to database connectivity.`,
                                    image: `${siteConfig.baseUrl}img/network.svg`,
                                    imageAlign: "top",
                                    title: "Modular"
                                },
                                {
                                    content:
                                        `BlitzMax users are friendly, creative, helpful and welcoming to all.<br/>`,
                                    image: `${siteConfig.baseUrl}img/group.svg`,
                                    imageAlign: "top",
                                    imageLink: `${siteConfig.baseUrl}docs/${this.props.language}/community/resources/`,
                                    title: "Community"
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

module.exports = Index;