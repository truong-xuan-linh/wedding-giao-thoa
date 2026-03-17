# 💍 Nét Giao Thoa — Thiệp Cưới Online

> **Phong cách Modern Retro Việt Nam** — Sự giao thoa giữa hồn cốt truyền thống và thẩm mỹ thiết kế hiện đại.

Thiệp cưới online cho **Trần Minh Quân** và **Nguyễn Thị Lan Anh** — ngày 15 tháng 6 năm 2026.

---

## ✨ Tính Năng

| Tính năng | Mô tả |
|-----------|-------|
| 🪭 **Nhạc nền** | Toggle nhạc bằng icon quạt giấy (Lo-fi + dân tộc) |
| 📩 **Phong bì mời** | Màn hình onboarding với phong bì đỏ 3D có nắp mở |
| ⏱ **Đếm ngược** | Flip-card countdown đến ngày cưới |
| 📖 **Chuyện tình** | Timeline ảnh cưới theo trục thời gian dọc |
| 💌 **Thông điệp** | Lời nhắn riêng từ cô dâu và chú rể |
| 🖼 **Album ảnh** | Gallery phong cách tranh treo tường cổ, lightbox toàn màn hình |
| 📍 **Thông tin lễ cưới** | Địa điểm, giờ, dresscode, bản đồ |
| 🎮 **Mini game** | "Ghép Đôi Uyên Ương" — memory card với 8 cặp biểu tượng văn hoá Việt |
| 🏮 **Sổ lưu bút** | Lời chúc bay lên như đèn lồng Hội An |
| 🧧 **Lì xì số** | Phong bì đỏ 3D với QR code ẩn bên trong |
| 🌸 **Cánh hoa rơi** | Hiệu ứng hoa rơi nhẹ nhàng toàn trang |
| 🔗 **Custom tên khách** | `?to=TênKháchMời` trong URL |

---

## 🎨 Thiết Kế

**Bảng màu truyền thống Việt Nam:**

- 🔴 **Đỏ sơn mài** (`#7A1515`) — màu nền chủ đạo
- 🟡 **Vàng kim** (`#B8860B` / `#F2C94C`) — viền và chữ nhấn
- 🟤 **Kem giấy cổ** (`#FDF6E3`) — nền section sáng
- 🟢 **Ngọc bích** (`#2D6A4F`) — accent xanh
- 🌸 **Hồng sen** (`#E8738A`) — điểm nhấn hoa

**Typography:**
- `Playfair Display` — heading display (italic serif)
- `Lora` — body text (Vietnamese-friendly)
- `Dancing Script` — tên cặp đôi, accent

**Motif trang trí:**
- Trống đồng (SVG inline — vòng tròn đồng tâm)
- Hoa sen, hoa đào
- Đèn lồng Hội An
- Họa tiết sóng nước

---

## 🚀 Cài Đặt & Chạy

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev
# → http://localhost:3000

# Build production
npm run build && npm start
```

---

## 🔗 URL Parameters

Tuỳ biến tên người nhận qua URL:

```
http://localhost:3000?to=Bác+Hùng
http://localhost:3000?to=Nhóm+Bạn+Thân
```

Tên sẽ hiện trong phong bì mời và phần hero.

---

## 📁 Cấu Trúc Dự Án

```
src/
├── app/
│   ├── layout.tsx          # Root layout + Google Fonts
│   ├── page.tsx            # Entry point (reads ?to= param)
│   ├── globals.css         # Design system: màu, font, animation
│   └── api/wishes/
│       └── route.ts        # GET/POST lời chúc (in-memory)
├── components/
│   ├── MainContent.tsx     # Orchestrator
│   ├── EnvelopeIntro.tsx   # Màn hình phong bì mở
│   ├── NavBar.tsx          # Sticky nav với hamburger mobile
│   ├── HeroSection.tsx     # Hero parallax + tên đôi uyên ương
│   ├── CountdownSection.tsx# Flip-card countdown
│   ├── LoveStoryTimeline.tsx # Timeline chuyện tình
│   ├── CoupleMessage.tsx   # Thông điệp cô dâu chú rể
│   ├── PhotoAlbum.tsx      # Gallery + lightbox
│   ├── WeddingDetails.tsx  # Thông tin lễ cưới
│   ├── MiniGame.tsx        # Memory matching game
│   ├── LixiBox.tsx         # Phong bì lì xì 3D
│   ├── Guestbook.tsx       # Sổ lưu bút + đèn lồng
│   ├── MusicPlayer.tsx     # Toggle nhạc (quạt giấy)
│   ├── FloatingPetals.tsx  # Hiệu ứng cánh hoa rơi
│   ├── LamourAd.tsx        # Branding l'amour
│   └── Footer.tsx          # Footer
└── data/
    └── weddingData.ts      # Tất cả mock data
public/
├── images/                 # 20 ảnh cưới (1.webp – 20.webp)
└── audio/
    └── background-music.mp3
```

---

## ⚙️ Tech Stack

| Thư viện | Phiên bản |
|----------|-----------|
| Next.js | ^15 |
| React | ^19 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Framer Motion | ^12 |
| React Icons | ^5 |

---

## 📝 Tuỳ Chỉnh Nội Dung

Mọi thông tin cô dâu chú rể, địa điểm, ảnh, lời nhắn đều nằm trong:

```
src/data/weddingData.ts
```

Chỉnh sửa file này để thay đổi nội dung mà không cần đụng đến code component.

---

## 🌐 L'Amour — Nền Tảng Thiệp Cưới Online

Thiệp này được tạo bởi **[l'amour](https://www.lamour.com.vn)** — nền tảng tạo thiệp cưới online độc đáo, hiện đại.

- 🌐 [lamour.com.vn](https://www.lamour.com.vn)
- 📱 [TikTok @lamourlink](https://www.tiktok.com/@lamourlink)
- 📸 [Instagram @lamourlink](https://www.instagram.com/lamourlink/)
- 📘 [Facebook](https://www.facebook.com/profile.php?id=61579532994773)

---

*© 2026 Trần Minh Quân & Nguyễn Thị Lan Anh — Mãi mãi bên nhau 💕*
