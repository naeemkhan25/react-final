import nerdImage from '../assets/images/illustration.png';
import Button from './Button';
import { Buttons, CardContainer, Content, H1, Image, P, Tag } from './styles/Container.styles';
import { CustomTitle } from './styles/Custom.styles';
;

export default function Card() {
    return (
      <CardContainer >
            <Content>
                <Tag color="red">EXCLUSIVE</Tag>
                <H1>
                  <CustomTitle text="React Styled Components" color="green"/>
                </H1>
                <P>
                    Exclusive React JS Tutorial on Styled Components where you will learn why we
                    need this & how to use it.
                </P>
              <Buttons>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
                </Buttons>
            </Content>
            <Image src={nerdImage} alt="Nerd" width="300px" />
       </CardContainer>
    );
}