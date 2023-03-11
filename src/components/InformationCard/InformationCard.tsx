import React from "react";

import Styles from "./InformationCard.styles";
import { InformationCardType } from "./InformationCard.types";
import StarImage from "../../assets/images/star.png";
import LanguageImage from "../../assets/images/language.png";

function InformationCard(props: InformationCardType) {
  const { item } = props;

  return (
    <Styles.Card>
      <Styles.Header>
        <Styles.Avatar src={item.owner.avatar_url} alt={item.name} />
        <Styles.Title title={item.name}>
          <Styles.Link href={item.html_url} target="_blank">
            {item.name}
          </Styles.Link>
        </Styles.Title>
      </Styles.Header>
      <Styles.Info>
        <Styles.Description>
          {item.description ?? "No Description..."}
        </Styles.Description>
        <Styles.Stats>
          <div>
            <Styles.ImageIcon src={StarImage} />
            <span className="stars">{item.stargazers_count}</span>
          </div>
          {item.language && (
            <div>
              <Styles.ImageIcon src={LanguageImage} />
              <span>{item.language}</span>
            </div>
          )}
        </Styles.Stats>
      </Styles.Info>
    </Styles.Card>
  );
}

export default InformationCard;
