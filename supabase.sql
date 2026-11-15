-- À coller dans Supabase > SQL Editor > Run
create table videos(
  id uuid primary key default gen_random_uuid(),
  title text not null,
  url text not null,
  cat text default 'Autre',
  created_at timestamptz default now());
create table submissions(
  id uuid primary key default gen_random_uuid(),
  name text, title text, msg text, url text,
  wants_public boolean default false,
  status text default 'pending',
  created_at timestamptz default now());
alter table videos enable row level security;
alter table submissions enable row level security;

create policy "lecture publique" on videos for select using (true);
create policy "admin videos" on videos for all
  using ((auth.jwt()->>'email')='benzenatiislem0@gmail.com')
  with check ((auth.jwt()->>'email')='benzenatiislem0@gmail.com');
create policy "envoi public" on submissions for insert with check (status='pending');
create policy "admin submissions" on submissions for all
  using ((auth.jwt()->>'email')='benzenatiislem0@gmail.com')
  with check ((auth.jwt()->>'email')='benzenatiislem0@gmail.com');

insert into storage.buckets (id,name,public) values ('videos','videos',true) on conflict do nothing;
create policy "lecture videos" on storage.objects for select using (bucket_id='videos');
create policy "envoi clients" on storage.objects for insert
  with check (bucket_id='videos' and (storage.foldername(name))[1]='submissions');
create policy "admin fichiers" on storage.objects for all
  using (bucket_id='videos' and (auth.jwt()->>'email')='benzenatiislem0@gmail.com')
  with check (bucket_id='videos' and (auth.jwt()->>'email')='benzenatiislem0@gmail.com');
