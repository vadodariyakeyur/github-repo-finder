import { FC } from "react";

import Styles from "./RepositoryInfo.styles";
import { RepositoryInfoProps } from "./RepositoryInfo.types";

export const RepositoryInfo: FC<RepositoryInfoProps> = (props) => {
  const { avatar, name, description, stars, language } = props;

  return (
    <Styles.Card>
      <Styles.Header>
        <Styles.Avatar src={avatar} alt={name} />
        <h2>
          <Styles.Link href="#">{name}</Styles.Link>
        </h2>
      </Styles.Header>
      <Styles.Info>
        <p>{description}</p>
        <Styles.Stats>
          <span>
            <i className="fas fa-star"></i> {stars}
          </span>
          <span>{language}</span>
        </Styles.Stats>
      </Styles.Info>
    </Styles.Card>
  );
};
