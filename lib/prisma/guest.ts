import prisma from ".";

export interface GuestI {
  name: string;
  createdAt?: Date;
}
export async function getGuests() {
  try {
    const guests = await prisma.guest.findMany();
    return { guests };
  } catch (error) {
    return { error };
  }
}

export async function createGuest(guest: GuestI) {
  try {
    const created = await prisma.guest.create({ data: { name: guest.name.toLowerCase() } });
    return { memo: created };
  } catch (error) {
    return { error };
  }
}

export async function deleteGuest(name: string) {
  try {
    const created = await prisma.guest.delete({ where: { name: name.toLowerCase() } });
    return { memo: created };
  } catch (error) {
    return { error };
  }
}
