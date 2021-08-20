const mainButton = document.querySelector('.share-button')

mainButton.onclick = () => {
  if (navigator.share) {
    navigator.share({ url: location.href })
  } else {
    navigator.clipboard.writeText(location.href)
    alert('링크를 클립보드에 복사했습니다.')
  }
}
