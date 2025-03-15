import styled from "styled-components";

export const CollectionWrap = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 70px;
`
export const CollectBgWrap = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
b{
    font-size: 40px;
    font-weight: 500;
}
p{
    font-size: 15px;
    font-weight: 500;
}
div{
    display: flex;
    align-items: center;
    gap: 8px;
}     
`
export const CollectFilter = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 30px;
p{
    color: var(--Accent-Color, #5F9999);
    font-size: 20px;
    font-weight: 700;
}     
`
export const GridsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    b{
      font-size: 22px;
      font-weight: 700;
    }
p{
    color: var(--Text-Color, #333);
    font-size: 20px;
    font-weight: 500;
}    
` 