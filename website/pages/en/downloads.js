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

class Downloads extends React.Component {
    render() {
        let language = this.props.language || 'en';

        return (
            <div>
                <div className="mainContainer">

                    <Container padding={["bottom", "top"]}>
                        <GridBlock
                            align="center"
                            contents={[
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.win32/BlitzMax_win32_0.98.3.27.7z">BlitzMax_win32_0.98.3.27.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, with both x86 and x64 MinGW-w64 8.1.0-rev0 distributions.
                                        Includes SDL backend, and mojo2.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.win32/BlitzMax_win32_0.98.3.27.7z`,
                                    title: "Win32 x86/x64"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.win32.x64/BlitzMax_win32_x64_0.98.3.27.7z">BlitzMax_win32_x64_0.98.3.27.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, aimed at x64 development, with x64 MinGW-w64 8.1.0-rev0.
                                        Includes SDL backend, and mojo2.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.win32.x64/BlitzMax_win32_x64_0.98.3.27.7z`,
                                    title: "Win32 x64"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.win32.x86/BlitzMax_win32_x86_0.98.3.27.7z">BlitzMax_win32_x86_0.98.3.27.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, aimed at x86 development, with x86 MinGW-w64 8.1.0-rev0.
                                        Includes SDL backend, and mojo2.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.win32.x86/BlitzMax_win32_x86_0.98.3.27.7z`,
                                    title: "win32 x86"
                                },
                            ]}
                            layout="threeColumn"
                        />

                        <GridBlock
                            align="center"
                            contents={[
                                {},
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.linux.x64/BlitzMax_linux_x64_0.98.3.27.tar.xz">BlitzMax_linux_x64_0.98.3.27.tar.xz</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, Linux edition, aimed at x64 development, with x64 MaxIDE.
                                        Includes SDL backend, mojo2, and Gtk3 MaxGUI.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/linux.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.98.3.27.linux.x64/BlitzMax_linux_x64_0.98.3.27.tar.xz`,
                                    title: "Linux x64"
                                },
                                {},
                            ]}
                            layout="threeColumn"
                        />

                        <GridBlock
                            align="center"
                            contents={[
                                {},
                                {
                                    content:
                                        `Coming soon...
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/apple.svg`,
                                    imageAlign: "top",
                                    //imageLink: `${siteConfig.baseUrl}docs/setup/${this.props.language}/platforms.html`,
                                    title: "macOS"
                                },
                                {},
                            ]}
                            layout="threeColumn"
                        />

                        <GridBlock
                            align="center"
                            contents={[
                                {},
                                {
                                    content:
                                        `Coming soon...
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/rpi.svg`,
                                    imageAlign: "top",
                                    //imageLink: `${siteConfig.baseUrl}docs/setup/${this.props.language}/platforms.html`,
                                    title: "Raspberry Pi"
                                },
                                {},
                            ]}
                            layout="threeColumn"
                        />
                    </Container>

                </div>
            </div>
        );
    }
}

module.exports = Downloads;