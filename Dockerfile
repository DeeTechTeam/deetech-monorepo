# Gunakan image oven/bun:canary-alpine sebagai base image
FROM oven/bun:canary-alpine

# Setel direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan bun.lockb terlebih dahulu untuk memanfaatkan cache Docker
COPY package.json bun.lockb ./

# Instal dependensi
RUN bun install

# Salin semua file proyek ke dalam direktori kerja
COPY . .

# Ekspose port yang digunakan oleh aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["bun", "run", "start"]