# apps/services/ai-service/app/main.py
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="Eduaksi AI Engine Core")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    user_id: str
    prompt: str
    role: str
    link_url: Optional[str] = None
    output_type: Optional[str] = None

@app.get("/")
def read_root():
    return {"status": "online", "service": "Eduaksi AI Agent Core Engine"}

@app.post("/api/ai/scan-of-answer")
async def scan_of_answer(
    user_id: str = Form(...),
    role: str = Form(...),
    image: UploadFile = File(...)
):
    try:
        return {
            "status": "success",
            "detected_question": "Tentukan himpunan penyelesaian dari persamaan kuadrat x² - 5x + 6 = 0",
            "answer": "x = 2 atau x = 3",
            "step_by_step": [
                "Langkah 1: Faktorkan persamaan menjadi (x - 2)(x - 3) = 0",
                "Langkah 2: Cari nilai x pertama: x - 2 = 0 -> x = 2",
                "Langkah 3: Cari nilai x kedua: x - 3 = 0 -> x = 3",
                "Hasil akhir: HP = {2, 3}"
              ],
            "kurikulum_context": "Kurikulum Merdeka"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/ai/obrolan-guru")
async def obrolan_guru(request: ChatRequest):
    is_unlimited = True if request.role.upper() == "GURU" else False
    
    response_data = {
        "user_id": request.user_id,
        "is_unlimited_access": is_unlimited,
        "ai_output_type": request.output_type if request.output_type else "TEXT_CHAT"
    }

    if request.output_type == "KUIS":
        response_data["data"] = [
            {"soal": "Manakah yang termasuk rukun Islam ke-3?", "opsi": ["Syahadat", "Shalat", "Zakat"], "kunci": "Zakat"}
        ]
    elif request.output_type == "MINDMAP":
        response_data["data"] = {
            "topic": "Materi Utama",
            "children": [{"topic": "Sub-Bab Teori"}, {"topic": "Sub-Bab Praktek"}]
        }
    else:
        response_data["data"] = "Jawaban kustom teks dari Asisten Agen AI Eduaksi 24 Jam."

    return response_data
