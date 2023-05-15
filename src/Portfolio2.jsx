import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const InnerContainer = styled.div`
    width: 1000px;
`

const BoxTitle = styled.div`
    font-size: 32px;
    font-weight: 600px;
`

const BoxSubTitle = styled.div`
    font-size: 24px;
    color: rgba(0, 0, 0, 0.7);
`

const ImageContent = styled.div`
    padding: 128px 64px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 350px;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    border-radius: 20px;
    margin: 20px;
`

const ContentsText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ContainerButton = styled.div`
    width: 200px;
    height: 60px;
    background: red;
    color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function Portfolio2(){
    return(
        <Container>
            {/*1000px 중앙정렬*/}
            <InnerContainer>
                <div>
                    <BoxTitle>온`오프라인 언제 어디서든</BoxTitle>
                    <BoxSubTitle>간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세요.</BoxSubTitle>
                </div>

                {
                    Array(4).fill("").map((_,i) => <ImageContent>
                    <ContentsText>
                        <div>카카오 비즈 채널</div>
                        <div>선발된 스마트한 핵심 투자 정보를 받으세요!</div>
                        <div>
                            <div>주기적으로 업데이트되는 공실률 정보</div>
                            <div>최근 시세 정보에 기반한 투자 인사이트</div>
                            <div>시시각각 변동되는 정부 정책과 규제 소식</div>
                        </div>
                    </ContentsText>
                    <ButtonContainer>
                        <ContainerButton>채널 바로가기</ContainerButton>
                    </ButtonContainer>
                </ImageContent>)
                }

                
            </InnerContainer>
        </Container>
    )
}