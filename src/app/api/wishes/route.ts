import { NextRequest, NextResponse } from 'next/server'

interface Wish {
  id: string
  name: string
  message: string
  relation: string
  createdAt: string
}

const wishesStore: Wish[] = [
  {
    id: '1',
    name: 'Gia đình Bác Hùng',
    message: 'Chúc hai con trăm năm hạnh phúc, sớm sinh quý tử! Gia đình luôn bên cạnh các con.',
    relation: 'Họ hàng',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: '2',
    name: 'Nhóm bạn thân K16',
    message: 'Chúc mừng cô dâu chú rể! Mong các bạn luôn yêu thương nhau như ngày đầu gặp gỡ.',
    relation: 'Bạn bè',
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: '3',
    name: 'Chị Thanh Hương',
    message: 'Chúc em gái và anh rể hạnh phúc viên mãn. Yêu thương!',
    relation: 'Gia đình',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: '4',
    name: 'Đồng nghiệp Công ty Minh',
    message: 'Mừng Quân lấy được vợ hiền. Chúc đôi uyên ương hạnh phúc trăm năm!',
    relation: 'Đồng nghiệp',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
]

export async function GET() {
  return NextResponse.json({ wishes: wishesStore })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, message, relation } = body
  if (!name || !message) {
    return NextResponse.json({ error: 'Thiếu thông tin' }, { status: 400 })
  }
  const newWish: Wish = {
    id: Date.now().toString(),
    name: name.trim(),
    message: message.trim(),
    relation: relation || 'Bạn bè',
    createdAt: new Date().toISOString(),
  }
  wishesStore.unshift(newWish)
  return NextResponse.json({ wish: newWish }, { status: 201 })
}
