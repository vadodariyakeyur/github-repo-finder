import { FC } from "react";

import Styles from "./RepositoryInfo.styles";
import { RepositoryInfoProps } from "./RepositoryInfo.types";
import StarImage from "../../assets/images/star.png";
import LanguageImage from "../../assets/images/language.png";

export const RepositoryInfo: FC<RepositoryInfoProps> = (props) => {
  const { avatar, name, description, stars, language, url } = props;

  return (
    <Styles.Card>
      <Styles.Header>
        <Styles.Avatar src={avatar} alt={name} />
        <Styles.Title title={name}>
          <Styles.Link href={url} target="_blank">
            {name}
          </Styles.Link>
        </Styles.Title>
      </Styles.Header>
      <Styles.Info>
        <Styles.Description>
          {description ?? "No Description..."}
        </Styles.Description>
        <Styles.Stats>
          <div>
            <Styles.ImageIcon src={StarImage} />
            <span className="stars">{stars}</span>
          </div>
          {language && (
            <div>
              <Styles.ImageIcon src={LanguageImage} />
              <span className="language">{language}</span>
            </div>
          )}
        </Styles.Stats>
      </Styles.Info>
    </Styles.Card>
  );
};
