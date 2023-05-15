import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
`
const InnerContainer = styled.div`
    width: 1000px;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`

const MainBox = styled.div`
    background: white;
    height: 400px;
    margin-top: -200px;
    z-index: 99;
    border-radius: 5% 0 5% 0;
    padding: 30px;
    #h2{
        font-weight: bold;
        font-size: 20px;
    }
    display: flex;
    gap: 50px;
    flex-direction: column;
`

const MainBox1 = styled.div`
    color: white;
    background: red;
    height: 400px;
    margin-top: -200px;
    z-index: 99;
    border-radius: 5% 0 5% 0;
    padding: 30px;
    #h2 {
        font-weight: bold;
        font-size: 20px;
    }
    display: flex;
    gap: 50px;
    flex-direction: column;
`

export default function Profile(){
    return (
        <Container>
            {/* 1000픽셀 중앙정렬*/}
            <InnerContainer>
                {/* 그리드 */}
                <GridContainer>
                    {/* 박스 */}
                    <MainBox>
                        임차인입니다
                        <br></br>
                        <h2 id="h2">허위매물 제로!</h2>
                    </MainBox>
                    <MainBox1>
                        임대인입니다
                        <h2 id="h2">공실걱정 제로!</h2>
                    </MainBox1>
                    <MainBox>
                        중개인입니다
                        <h2 id="h2">광고비 제로!</h2>
                    </MainBox>
                </GridContainer>
            </InnerContainer>
        </Container>
    )
}