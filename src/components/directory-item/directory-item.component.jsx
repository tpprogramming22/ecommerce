import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {

    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);


    return (

      
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage
          imageUrl={imageUrl}/>
          <Body>
            <h2>{title.toUpperCase()}</h2>
            <p>SHOP NOW</p>
          </Body>

        </DirectoryItemContainer>

        
    );

}

export default DirectoryItem;