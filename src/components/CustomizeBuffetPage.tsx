import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #FDFCFB;
  min-height: 100vh;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100vw;
  height: 610px;
  flex-shrink: 0;
  background: url(${process.env.PUBLIC_URL + '/images/cus-page-heroimage.jpg'}) center / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #000;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryImage = styled.div<{ bgImage: string }>`
  height: 180px;
  background: url(${props => props.bgImage}) center/cover;
  position: relative;
`;

const CategoryInfo = styled.div`
  padding: 20px;
`;

const CategoryName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
`;

const CategoryPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const PriceUnit = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 4px;
`;

const Duration = styled.span`
  font-size: 14px;
  color: #666;
`;

const ViewButton = styled.button`
  width: 100%;
  background: transparent;
  border: 1px solid #ddd;
  color: #000;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    background: #f8f8f8;
  }
`;

const CustomDesignSection = styled.div`
  background: #f8f8f8;
  padding: 60px 20px;
  text-align: center;
`;

const CustomTitle = styled.h2`
  color: #000;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
`;

const CustomSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #000;
  margin-bottom: 24px;
`;

const CustomDescription = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const DesignGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const DesignCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const DesignImage = styled.div<{ bgImage: string }>`
  height: 200px;
  background: url(${props => props.bgImage}) center/cover;
`;

const DesignInfo = styled.div`
  padding: 20px;
  text-align: left;
`;

const DesignName = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
`;

const DesignStats = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;
`;

const CustomizeBuffetPage: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: 'Cuisine Design',
      price: 26,
      duration: '1d. Max',
      image: process.env.PUBLIC_URL + '/images/cuisine-design-card.jpg'
    },
    {
      id: 2,
      name: 'Color Design',
      price: 28,
      duration: '1w. Weekly',
      image: process.env.PUBLIC_URL + '/images/color-design-card.jpg'
    },
    {
      id: 3,
      name: 'Festival Design',
      price: 16,
      duration: '1d. Orderly',
      image: process.env.PUBLIC_URL + '/images/festival-design-card.jpg'
    },
    {
      id: 4,
      name: 'Food Design',
      price: 28,
      duration: '3d. Alex',
      image: process.env.PUBLIC_URL + '/images/food-design-card.jpg'
    }
  ];

  const customDesigns = [
    {
      id: 1,
      name: 'JOJO',
      stats: { likes: 2299, views: '1k' },
      image: process.env.PUBLIC_URL + '/images/custom-jojo.jpg'
    },
    {
      id: 2,
      name: 'Nords',
      stats: { likes: 1309, views: '1k' },
      image: process.env.PUBLIC_URL + '/images/custom-nords.jpg'
    },
    {
      id: 3,
      name: 'L&P',
      stats: { likes: 4379, views: '1k' },
      image: process.env.PUBLIC_URL + '/images/custom-lp.jpg'
    },
    {
      id: 4,
      name: 'HASU',
      stats: { likes: 2500, views: '1k' },
      image: process.env.PUBLIC_URL + '/images/custom-hasu.jpg'
    },
    {
      id: 5,
      name: 'Hoshimi',
      stats: { likes: 1439, views: '1k' },
      image: process.env.PUBLIC_URL + '/images/custom-hoshimi.jpg'
    },
    {
      id: 6,
      name: 'Royal Design',
      stats: { likes: 4593, views: '1k' },
      image: process.env.PUBLIC_URL + '/images/custom-royal.jpg'
    }
  ];

  const handleCategoryClick = (categoryId: number) => {
    console.log('Selected category:', categoryId);
    // Navigate to specific category page
  };

  const handleDesignClick = (designId: number) => {
    console.log('Selected design:', designId);
    // Navigate to design details
  };

  return (
    <PageContainer>
      <HeroSection>
      </HeroSection>

      <ContentSection>
        <Title>Choose the category you want to customize</Title>
        <Description>
          Here are the different buffet setting customize services according to the type of buffet. Choose the category you need, buy once, use forever.
        </Description>

        <CategoryGrid>
          {categories.map((category) => (
            <CategoryCard key={category.id} onClick={() => handleCategoryClick(category.id)}>
              <CategoryImage bgImage={category.image} />
              <CategoryInfo>
                <CategoryName>{category.name}</CategoryName>
                <CategoryPrice>
                  <div>
                    <Price>${category.price}</Price>
                    <PriceUnit>USD</PriceUnit>
                  </div>
                  <Duration>{category.duration}</Duration>
                </CategoryPrice>
                <ViewButton>
                  View Product
                  <span>→</span>
                </ViewButton>
              </CategoryInfo>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </ContentSection>

      <CustomDesignSection>
        <CustomTitle>Not enough?</CustomTitle>
        <CustomSubtitle>Choose from our 1 on 1 customized design package!</CustomSubtitle>
        <CustomDescription>
          Our dedicated team will work closely with you to transform your ideas and preferences into a truly distinctive 
          and unforgettable buffet experience. Whether it's an intimate gathering or a grand celebration, our 1 on 1 
          customized design package is your key to setting the stage for an extraordinary dining journey.
        </CustomDescription>

        <DesignGrid>
          {customDesigns.map((design) => (
            <DesignCard key={design.id} onClick={() => handleDesignClick(design.id)}>
              <DesignImage bgImage={design.image} />
              <DesignInfo>
                <DesignName>{design.name}</DesignName>
                <DesignStats>
                  <span>❤️ {design.stats.likes}</span>
                  <span>👁️ {design.stats.views}</span>
                </DesignStats>
              </DesignInfo>
            </DesignCard>
          ))}
        </DesignGrid>
      </CustomDesignSection>
    </PageContainer>
  );
};

export default CustomizeBuffetPage; 