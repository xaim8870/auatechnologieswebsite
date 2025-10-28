# Building Brain Tumor Detection with YOLOv12 + Swin Transformer

**Published:** February 2025

---

This project combines YOLOv12 with Swin Transformer for multi-task brain tumor detection.

## Architecture
- YOLOv12 backbone with Swin blocks
- Multi-head attention for feature fusion
- Trained on **BraTS 2020** dataset

```python
# sample code snippet
model = YOLOv12Swin(pretrained=True)
results = model.detect(image)
