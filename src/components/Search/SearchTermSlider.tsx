import React from 'react';
import Button from '@mui/material/Button';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper';
import { supportedSearchTerms } from './supportedSearchQuerries';
import { useNavigate } from 'react-router-dom';

type Props = {
  selected?: string | undefined | null;
  handleRemoveSearch?: FunctionStringCallback;
};

const SearchTermSlider: React.FC<Props> = ({
  selected = null,
  handleRemoveSearch = null,
}) => {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Scrollbar, Autoplay]}
      spaceBetween={-270}
      slidesPerView='auto'
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
    >
      {supportedSearchTerms.map((term) => {
        return (
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'stretch',
              alignItems: 'stretch',
              width: '100%',
              textAlign: 'center',
            }}
            key={term}
          >
            <Button
              style={{ width: '140px', textAlign: 'center' }}
              variant={selected === term ? 'contained' : 'outlined'}
              onClick={() => {
                if (selected === term && handleRemoveSearch)
                  return handleRemoveSearch(term);
                navigate(`/search?id=${term}`);
              }}
            >
              {term}
            </Button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SearchTermSlider;
