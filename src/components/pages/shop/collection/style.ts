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
     gap: 20px;
p{
    color: var(--Accent-Color, #5F9999);
    font-size: 18px;
    font-weight: 700;
}     
`
export const GridsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 720px;
    margin-top: 20px;
p{
    color: var(--Text-Color, #333);
    font-size: 19px;
    font-weight: 500;
}    
` 
export const FilteredProsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
    gap: 0px;
    padding: 0px 100px 100px 100px;
`
export const FilteredtPros = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin-top: 100px;
    padding: 0px 50px ;

.pros-bg{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    border-radius:100px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    cursor: pointer;
img{
    width: 320px;
}
}
.texts-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
b{
    color: var(--Text-Color, #252525);
    font-size: 20px;
    font-weight: 600;

}
p{
    color: var(--Substitute-Accent-Color, #DAA174);
    font-size: 20px;
    font-weight: 600;
}
}
`