/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import GithubSvg from "../../images/svg/GithubSvg"
import IntagramSvg from "../../images/svg/InstagramSvg"
import LinkedinSvg from "../../images/svg/LinkedinSvg"

const SocialMedia = ({ position, fill, fliud }) => {
  const socialMedia = [
    {
      name: "github",
      url: "https://github.com/ariefirawant",
      icon: <GithubSvg sx={{ fill }} />,
    },
    {
      name: "likendin",
      url: "https://likendin.com",
      icon: <LinkedinSvg sx={{ fill }} />,
    },
    {
      name: "instagram",
      url: "https://instagram.com/ariefi",
      icon: <IntagramSvg sx={{ fill }} />,
    },
  ];

  return (
    <div
      sx={{
        display: "flex",
        justifyContent: fliud ? "center" : position,
        "@media screen and (min-width: 52em)": {
          justifyContent: position,
        },
      }}
    >
      {socialMedia.map(social => (
        <OutboundLink
          key={social.name}
          href={social.url}
          aria-label={`follow me at ${social.name}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ p: 2 }}
        >
          {social.icon}
        </OutboundLink>
      ))}
    </div>
  )
}


SocialMedia.propTypes = {
  position: PropTypes.string,
  fill: PropTypes.string,
  fliud: PropTypes.bool,
};

SocialMedia.defaultProps = {
  position: 'start',
  fill: 'text',
  fliud: false,
};

export default SocialMedia;