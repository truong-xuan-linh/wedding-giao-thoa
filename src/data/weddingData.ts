export const weddingData = {
  groom: {
    name: 'Trần Minh Quân',
    shortName: 'Minh Quân',
    role: 'Chú Rể',
    description: 'Một người đàn ông điềm tĩnh, hài hước và luôn biết cách làm Lan Anh mỉm cười trong những lúc khó khăn nhất.',
    photo: '/images/5.webp',
    family: {
      father: 'Ông Trần Văn Bình',
      mother: 'Bà Nguyễn Thị Mai',
      address: 'Quận 3, TP. Hồ Chí Minh',
    },
  },
  bride: {
    name: 'Nguyễn Thị Lan Anh',
    shortName: 'Lan Anh',
    role: 'Cô Dâu',
    description: 'Một cô gái dịu dàng, tràn đầy năng lượng và mang trong tim một tình yêu sâu sắc với nghệ thuật và con người.',
    photo: '/images/3.webp',
    family: {
      father: 'Ông Nguyễn Văn Hùng',
      mother: 'Bà Phạm Thị Thu',
      address: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
    },
  },
  wedding: {
    date: new Date('2026-06-15T10:30:00'),
    dateDisplay: 'Ngày 15 tháng 6 năm 2026',
    lunarDate: '20 tháng 5 năm Bính Ngọ',
    time: '10:30 SA',
    venue: {
      name: 'Nhà Hàng Tiệc Cưới Hoa Viên',
      address: '123 Đường Đinh Tiên Hoàng, Quận 1, TP. Hồ Chí Minh',
      mapUrl: 'https://maps.google.com',
      hall: 'Sảnh Ngọc Lan – Tầng 2',
      parking: 'Bãi đỗ xe miễn phí tầng hầm B1',
    },
    dresscode: 'Trang phục thanh lịch, tông màu pastel hoặc truyền thống',
  },
  loveStory: [
    {
      year: '2019',
      title: 'Lần Đầu Gặp Gỡ',
      description: 'Hai người gặp nhau tại một triển lãm nghệ thuật ở Hà Nội. Quân bị thu hút bởi cách Lan Anh say sưa ngắm nhìn bức tranh sơn mài.',
      photo: '/images/1.webp',
      icon: '🌸',
    },
    {
      year: '2020',
      title: 'Những Ngày Tháng Ngọt Ngào',
      description: 'Qua đại dịch, hai người nhận ra rằng có nhau là hạnh phúc đủ đầy nhất. Những cuộc gọi video dài, những tin nhắn nửa đêm.',
      photo: '/images/2.webp',
      icon: '💌',
    },
    {
      year: '2021',
      title: 'Hành Trình Cùng Nhau',
      description: 'Chuyến du lịch đầu tiên đến Hội An – nơi đèn lồng thắp sáng những con đường nhỏ và tình yêu bắt đầu có tên.',
      photo: '/images/7.webp',
      icon: '🏮',
    },
    {
      year: '2023',
      title: 'Câu Hỏi Thay Đổi Tất Cả',
      description: 'Tại đỉnh núi Bà Nà Hills trong hoàng hôn đỏ rực, Quân quỳ xuống với chiếc nhẫn và câu hỏi mà Lan Anh đã chờ đợi.',
      photo: '/images/9.webp',
      icon: '💍',
    },
    {
      year: '2026',
      title: 'Ngày Trọng Đại',
      description: 'Và đây, ngày đẹp nhất trong cuộc đời – khi hai tâm hồn chính thức hòa làm một trước sự chứng kiến của gia đình và bạn bè.',
      photo: '/images/11.webp',
      icon: '👑',
    },
  ],
  groomMessage: `Lan Anh yêu,

Kể từ ngày đầu tiên nhìn thấy em đứng trầm tư trước bức tranh sơn mài ấy, anh đã biết rằng cuộc sống của mình sẽ không bao giờ còn như cũ.

Em đã dạy anh biết trân trọng những khoảnh khắc bé nhỏ – một tách trà sáng, ánh nắng chiều qua cửa sổ, tiếng cười của em giữa bữa tối.

Hôm nay anh hứa: sẽ là người bạn đồng hành xứng đáng với em. Mãi mãi.

Yêu em,
Minh Quân`,
  brideMessage: `Minh Quân ơi,

Người ta hay nói về tình yêu như thể nó phải ồn ào và đặc biệt. Nhưng với anh, tình yêu của em lại giản dị như hơi thở.

Cảm ơn anh đã kiên nhẫn, đã hiểu em hơn cả chính em hiểu bản thân. Cảm ơn anh đã ở đó – trong từng mùa xuân, hạ, thu, đông của 7 năm qua.

Hôm nay em bước đến bên anh với trái tim đầy tràn.

Mãi là của anh,
Lan Anh`,
  photos: Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/images/${i + 1}.webp`,
    alt: `Ảnh cưới Minh Quân & Lan Anh ${i + 1}`,
    caption: [
      'Khoảnh khắc đầu tiên',
      'Nụ cười hạnh phúc',
      'Bên nhau mãi mãi',
      'Tình yêu đong đầy',
      'Hai trái tim một nhịp đập',
      'Hành trình cùng nhau',
      'Đèn lồng Hội An',
      'Buổi sáng bình yên',
      'Hoàng hôn tình yêu',
      'Kỷ niệm ngọt ngào',
      'Ngày đặc biệt',
      'Hạnh phúc viên mãn',
      'Nụ hôn đầu tiên',
      'Cùng nhau về nhà',
      'Tình yêu vĩnh cửu',
      'Ánh mắt trao nhau',
      'Mùa xuân đôi ta',
      'Lời hứa trăm năm',
      'Cổ tích bắt đầu',
      'Hạnh phúc trăm năm',
    ][i],
  })),
  miniGameSymbols: [
    { id: 'lotus', emoji: '🪷', name: 'Hoa Sen' },
    { id: 'dragon', emoji: '🐉', name: 'Rồng' },
    { id: 'phoenix', emoji: '🦅', name: 'Phượng' },
    { id: 'bamboo', emoji: '🎋', name: 'Tre' },
    { id: 'moon', emoji: '🌕', name: 'Trăng Rằm' },
    { id: 'lantern', emoji: '🏮', name: 'Đèn Lồng' },
    { id: 'peach', emoji: '🌸', name: 'Hoa Đào' },
    { id: 'drum', emoji: '🥁', name: 'Trống Đồng' },
  ],
  socialLinks: {
    website: 'https://www.lamour.com.vn',
    tiktok: 'https://www.tiktok.com/@lamourlink',
    instagram: 'https://www.instagram.com/lamourlink/',
    facebook: 'https://www.facebook.com/profile.php?id=61579532994773',
  },
}
