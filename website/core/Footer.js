/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('setup/get_started', this.props.language)}>
              Getting Started
            </a>
            <a href={this.pageUrl('downloads', this.props.language)}>
              Downloads
            </a>
              <a href={this.docUrl('site/about', this.props.language)}>
                  About
              </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.docUrl('community/resources', this.props.language)}>
              Resources
            </a>
            <a
              href="https://www.syntaxbomb.com/index.php/board,19.0.html"
              target="_blank"
              rel="noreferrer noopener">
              SyntaxBomb Forums
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/bmx-ng">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/bmx-ng/bmx-ng/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            <a href="https://discord.gg/yVxkBybBsY" target="_blank" rel="noreferrer noopener">
              <img alt="Chat on Discord" src="https://img.shields.io/discord/613699895139762176?logo=discord&color=DDDDDD&logoColor=555555&style=social"/>
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
