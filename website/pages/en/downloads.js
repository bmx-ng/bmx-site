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
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.51.win32.mingw/BlitzMax_win32_mingw_0.136.3.51.7z">BlitzMax_win32_mingw_0.136.3.51.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, with both x86 and x64 MinGW-w64 12.2.0 distributions.
                                        Includes SDL backend, mojo2, Crypto, Audio, Image, Net, Random, Text and Steam.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.51.win32.mingw/BlitzMax_win32_mingw_0.136.3.51.7z`,
                                    title: "Win32 x86/x64 (mingw)"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.51.win32.x64.mingw/BlitzMax_win32_x64_mingw_0.136.3.51.7z">BlitzMax_win32_x64_mingw_0.136.3.51.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, aimed at x64 development, with x64 MinGW-w64 12.2.0.
                                        Includes SDL backend, mojo2, Crypto, Audio, Image, Net, Random, Text and Steam.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.51.win32.x64.mingw/BlitzMax_win32_x64_mingw_0.136.3.51.7z`,
                                    title: "Win32 x64 (mingw)"
                                },
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.51.win32.x86.mingw/BlitzMax_win32_x86_mingw_0.136.3.51.7z">BlitzMax_win32_x86_mingw_0.136.3.51.7z</a>
                                         </strong>
                                        <br/><br/>
                                        Windows edition, aimed at x86 development, with x86 MinGW-w64 12.2.0.
                                        Includes SDL backend, mojo2, Crypto, Audio, Image, Net, Random, Text and Steam.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/windows.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.51.win32.x86.mingw/BlitzMax_win32_x86_mingw_0.136.3.51.7z`,
                                    title: "win32 x86 (mingw)"
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
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.129.3.45.linux.x64/BlitzMax_linux_x64_0.129.3.45.tar.xz">BlitzMax_linux_x64_0.129.3.45.tar.xz</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, Linux edition, aimed at x64 development, with x64 MaxIDE.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text, Steam and Gtk MaxGUI.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/linux.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.129.3.45.linux.x64/BlitzMax_linux_x64_0.129.3.45.tar.xz`,
                                    title: "Linux x64"
                                },
                                {},
                            ]}
                            layout="threeColumn"
                        />

                        <GridBlock
                            align="center"
                            contents={[
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.49.macos.arm64/BlitzMax_macos_arm64_0.136.3.49.zip">BlitzMax_macos_arm64_0.136.3.49.zip</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, arm64 macOS edition.
                                        Includes SDL backend, mojo2, Crypto, Audio, Image, Random, Net, Text and Steam.
                                        <br/>
                                        See the <strong><a href="https://github.com/bmx-ng/bmx-ng/releases/tag/v0.136.3.49.macos.arm64">Release Notes</a></strong> for setup information.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/apple.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.49.macos.arm64/BlitzMax_macos_arm64_0.136.3.49.zip`,
                                    title: "macOS"
                                },
                                {},
                                {
                                    content:
                                        `<strong>
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.49.macos.x64/BlitzMax_macos_x64_0.136.3.49.zip">BlitzMax_macos_x64_0.136.3.49.zip</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, x64 macOS edition.
                                        Includes SDL backend, mojo2, Crypto, Audio, Image, Random, Net, Text and Steam.
                                        <br/>
                                        See the <strong><a href="https://github.com/bmx-ng/bmx-ng/releases/tag/v0.136.3.49.macos.x64">Release Notes</a></strong> for setup information.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/apple.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.136.3.49.macos.x64/BlitzMax_macos_x64_0.136.3.49.zip`,
                                    title: "macOS"
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
                                            <a href="https://github.com/bmx-ng/bmx-ng/releases/download/v0.129.3.45.rpi.arm/BlitzMax_rpi_arm_0.129.3.45.tar.xz">BlitzMax_rpi_arm_0.129.3.45.tar.xz</a>
                                         </strong>
                                        <br/><br/>
                                        BlitzMax, RaspberryPi edition, aimed at 32-bit ARM development, with MaxIDE.
                                        Includes SDL backend, mojo2, Crypto, Audio, Random, Text and Gtk MaxGUI.
                                        `,
                                    image: `${siteConfig.baseUrl}img/platform/rpi.svg`,
                                    imageAlign: "top",
                                    imageLink: `https://github.com/bmx-ng/bmx-ng/releases/download/v0.129.3.45.rpi.arm/BlitzMax_rpi_arm_0.129.3.45.tar.xz`,
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