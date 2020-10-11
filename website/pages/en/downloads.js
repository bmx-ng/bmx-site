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
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.win32/BlitzMax_win32_0.128.3.45.7z">BlitzMax_win32_0.128.3.45.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, with both x86 and x64 MinGW-w64 8.1.0-rev0 distributions.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text and Steam.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.win32/BlitzMax_win32_0.128.3.45.7z`,
                                    title: "Win32 x86/x64"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.win32.x64/BlitzMax_win32_x64_0.128.3.45.7z">BlitzMax_win32_x64_0.128.3.45.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, aimed at x64 development, with x64 MinGW-w64 8.1.0-rev0.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text and Steam.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.win32.x64/BlitzMax_win32_x64_0.128.3.45.7z`,
                                    title: "Win32 x64"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.win32.x86/BlitzMax_win32_x86_0.128.3.45.7z">BlitzMax_win32_x86_0.128.3.45.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, aimed at x86 development, with x86 MinGW-w64 8.1.0-rev0.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text and Steam.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.win32.x86/BlitzMax_win32_x86_0.128.3.45.7z`,
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
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.linux.x64/BlitzMax_linux_x64_0.128.3.45.tar.xz">BlitzMax_linux_x64_0.128.3.45.tar.xz</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, Linux edition, aimed at x64 development, with x64 MaxIDE.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text, Steam and Gtk MaxGUI.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/linux.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.linux.x64/BlitzMax_linux_x64_0.128.3.45.tar.xz`,
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
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.macos.x64/BlitzMax_macos_x64_0.128.3.45.zip">BlitzMax_macos_x64_0.128.3.45.zip</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, x64 macOS edition.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text and Steam.
                                        <br/>
                                        See the <strong><a href="https://github.com/bmx-ng/bmx-ng/releases/tag/v0.128.3.45.macos.x64">Release Notes</a></strong> for setup information.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/apple.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.macos.x64/BlitzMax_macos_x64_0.128.3.45.zip`,
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
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.rpi.arm/BlitzMax_rpi_arm_0.128.3.45.tar.xz">BlitzMax_rpi_arm_0.128.3.45.tar.xz</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, RaspberryPi edition, aimed at 32-bit ARM development, with MaxIDE.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text and Gtk MaxGUI.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/rpi.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.128.3.45.rpi.arm/BlitzMax_rpi_arm_0.128.3.45.tar.xz`,
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